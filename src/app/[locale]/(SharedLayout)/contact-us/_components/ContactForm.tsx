"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { IoClose } from "react-icons/io5";
import SuccessIcon from "@/components/ui/SuccessIcon";
import { useTranslation } from "react-i18next";

const ContactUsSchema = (t: (key: string) => string) =>
  z.object({
    firstName: z
      .string()
      .min(1, t("validation.firstName"))
      .max(50, t("validation.tooLong"))
      .refine((val) => !/[<>]/.test(val), {
        message: t("validation.noHtmlTags"),
      }),
    lastName: z
      .string()
      .min(1, t("validation.lastName"))
      .max(50, t("validation.tooLong"))
      .refine((val) => !/[<>]/.test(val), {
        message: t("validation.noHtmlTags"),
      }),
    email: z
      .string()
      .email(t("validation.emailInvalid"))
      .min(1, t("validation.emailRequired")),
    phone: z
      .string()
      .regex(/^(?:\+966|0)?5\d{8}$/, t("validation.phoneInvalid"))
      .min(1, t("validation.phoneRequired")),
    message: z
      .string()
      .min(1, t("validation.message"))
      .max(500, t("validation.tooLong"))
      .refine((val) => !/[<>]/.test(val), {
        message: t("validation.noHtmlTags"),
      }),
  });

type ContactUsType = z.infer<ReturnType<typeof ContactUsSchema>>;

function ContactForm() {
  const { t } = useTranslation("contactUs");

  const methods = useForm<ContactUsType>({
    resolver: zodResolver(ContactUsSchema(t)),
    mode: "onChange",
  });

  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (data: ContactUsType) => {
    setIsPending(true);

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}front/contacts`;

    const requestBody = {
      email: data.email,
      phone: data.phone,
      first_name: data.firstName,
      last_name: data.lastName,
      message: data.message,
      "type": "contacts"
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.custom((ts) => (
        <div className="bg-background-primary-alt border border-border-primary text-text-secondary-700 p-4 rounded-lg shadow-lg flex items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <SuccessIcon />
            <span className="text-sm font-medium">{t("successMessage")}</span>
          </div>
          <button
            onClick={() => toast.dismiss(ts)}
            className="text-foreground-quinary-400 hover:text-text-primary-900 transition-colors"
          >
            <IoClose className="w-5 h-5" />
          </button>
        </div>
      ));

      methods.reset();
    } catch (error) {
      toast.error(t("errorMessage"));
      console.error("Error submitting form:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="main-container w-full flex xl:w-[560px] pt-[32px] pr-[32px] pl-[32px] flex-col gap-[32px] items-center bg-[#fbfbfb] rounded-[16px] relative mx-auto my-0">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-full xl:w-[496px] flex-col gap-[40px] items-center shrink-0 relative"
        >
          <div className="flex flex-col gap-[24px] items-center self-stretch shrink-0 relative z-[1]">
            <div className="flex flex-col xl:flex-row gap-[32px] items-start self-stretch shrink-0 relative z-[2]">
              {/* First Name */}
              <div className="flex xl:w-[232px] flex-col gap-[8px] self-stretch shrink-0 relative z-[11]">
                <label className="text-[14px] font-medium text-[#667680]">
                  {t("form.firstName")} *
                </label>
                <input
                  {...methods.register("firstName")}
                  placeholder={t("form.firstNamePlaceholder")}
                  className="outline-none text-black w-full xl:w-[232px] h-[56px] bg-[#f4f4f4] rounded-[15px] px-[16px] placeholder:text-[#BABFC2] "
                />
                {methods.formState.errors.firstName && (
                  <div className="text-red-500 text-[12px]">
                    {methods.formState.errors.firstName.message}
                  </div>
                )}
              </div>

              {/* Last Name */}
              <div className="flex xl:w-[232px] flex-col gap-[8px] self-stretch shrink-0 relative z-[3]">
                <label className="text-[14px] font-medium text-[#667680]">
                  {t("form.lastName")} *
                </label>
                <input
                  {...methods.register("lastName")}
                  placeholder={t("form.lastNamePlaceholder")}
                  className="outline-none text-black placeholder:text-[#BABFC2] w-full xl:w-[232px] h-[56px] bg-[#f4f4f4] rounded-[15px] px-[16px] "
                />
                {methods.formState.errors.lastName && (
                  <div className="text-red-500 text-[12px]">
                    {methods.formState.errors.lastName.message}
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[8px] self-stretch shrink-0 relative z-[19]">
              <label className="text-[14px] font-medium text-[#667680]">
                {t("form.email")} *
              </label>
              <input
                {...methods.register("email")}
                type="email"
                placeholder="you@company.com"
                className="outline-none text-black placeholder:text-[#BABFC2] w-full xl:w-[496px] h-[56px] bg-[#f4f4f4] rounded-[15px] px-[16px] "
              />
              {methods.formState.errors.email && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.email.message}
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-[8px] self-stretch shrink-0 relative z-[27]">
              <label className="text-[14px] font-medium text-[#667680]">
                {t("form.phone")} *
              </label>
              <input
                {...methods.register("phone")}
                placeholder={t("form.phonePlaceholder")}
                className="outline-none text-black placeholder:text-[#BABFC2] w-full xl:w-[496px] h-[56px] bg-[#f4f4f4] rounded-[15px] px-[16px] "
                dir={t('dir')}
                  style={{ textAlign: t('textaligh') as 'left' | 'right' | 'center' }} 
              />
              {methods.formState.errors.phone && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.phone.message}
                </div>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-[8px] self-stretch shrink-0 relative z-[29]">
              <label className="text-[14px] font-medium text-[#667680]">
                {t("form.message")}
              </label>
              <textarea
                {...methods.register("message")}
                placeholder={t("form.messagePlaceholder")}
                className="outline-none placeholder:text-[#BABFC2] text-black w-full xl:w-[496px] h-[90px] bg-[#f4f4f4] rounded-[15px] py-[16px] px-[16px] "
              />
              {methods.formState.errors.message && (
                <div className="text-red-500 text-[12px]">
                  {methods.formState.errors.message.message}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="flex gap-[16px] items-start justify-center self-stretch shrink-0 bg-[#5D9D9F] text-[#fff] rounded-[15px] px-[50px] py-[14px]"
          >
            {isPending ? t("form.sending") : t("form.submit")}
          </button>
        </form>
      </div>
    </FormProvider>
  );
}

export default ContactForm;
