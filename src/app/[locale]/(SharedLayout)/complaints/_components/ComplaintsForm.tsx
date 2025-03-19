"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { IoClose } from "react-icons/io5";
import SuccessIcon from "@/components/ui/SuccessIcon";
import { useTranslation } from "react-i18next";

// Validation schema with Zod
const ComplaintsSchema = z.object({
  email: z.string().email().min(1, "email_required"),
  fullName: z.string().min(1, "validation.full_name_required"),
  phone: z
    .string()
    .regex(/^(?:\+966|0)?5\d{8}$/, "validation.invalid_phone")
    .min(1, "validation.phone_required"),
  reason: z.string().min(1, "validation.reason_required"),
  message: z.string().min(1, "validation.message_required"),
});

type ComplaintsType = z.infer<typeof ComplaintsSchema>;

function ComplaintsForm() {
  const { t , i18n  } = useTranslation("complaints");
  const methods = useForm<ComplaintsType>({
    resolver: zodResolver(ComplaintsSchema),
    mode: "onChange",
  });

  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (data: ComplaintsType) => {
    setIsPending(true);

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}front/complaints`;

    const requestBody = {
      email: data.email,
      phone: data.phone,
      full_name: data.fullName,
      reson: data.reason,
      message: data.message,
      "type": "complaints",
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
        throw new Error("Failed to send complaint");
      }

      toast.custom((ts) => (
        <div className="bg-background-primary-alt border border-border-primary text-text-secondary-700 p-4 rounded-lg shadow-lg flex items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <SuccessIcon />
            <span className="text-sm font-medium">{t("success_message")}</span>
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
      toast.error(t("error_message"));
      console.error("Error submitting complaint:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex w-full lg:w-[918px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[64px] items-center shrink-0 flex-nowrap bg-[#fbfbfb] rounded-[16px] relative z-[3]">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-[40px] items-center shrink-0 relative"
        >
          <div className="flex flex-col gap-[24px] items-center self-stretch shrink-0 relative z-[1]">
            <div className="flex flex-col lg:flex-row w-full gap-[32px]">
              {/* Full Name */}
              <div className="flex flex-col w-full lg:w-[411px] gap-[8px]">
                <label className="text-[14px] font-medium text-[#667680]">
                  {t("fields.full_name")}
                </label>
                <input
                  {...methods.register("fullName")}
                  placeholder={t("placeholders.full_name")}
                  className="outline-none text-black placeholder:text-[#BABFC2] w-full h-[56px] bg-[#f4f4f4] rounded-[15px] px-[16px] shadow-sm"
                />
                {methods.formState.errors.fullName && (
                  <div className="text-red-500 text-[12px]">
                    {t(`${methods.formState.errors.fullName.message}`)}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col w-full lg:w-[411px] gap-[8px]">
                <label className="text-[14px] font-medium text-[#667680]">
                  {t("fields.email")}
                </label>
                <input
                  {...methods.register("email")}
                  placeholder={t("placeholders.email")}
                  className="outline-none text-black placeholder:text-[#BABFC2] w-full h-[56px] bg-[#f4f4f4] rounded-[15px] px-[16px] shadow-sm"
                />
                {/* {methods.formState.errors.email && (
                  <div className="text-red-500 text-[12px]">
                    {t(`${methods.formState.errors.email.message}`)}
                  </div>
                )} */}
              </div>
            </div>

            <div className="flex w-full flex-col lg:flex-row gap-[32px]">
              {/* Phone */}
              <div className="flex flex-col gap-[8px] w-full lg:w-[411px]">
                <label className="text-[14px] font-medium text-[#667680]">
                  {t("fields.phone")}
                </label>
                <input
                  {...methods.register("phone")}
                  placeholder={t("placeholders.phone")}
                  className="outline-none text-black placeholder:text-[#BABFC2] w-full h-[56px] bg-[#f4f4f4] rounded-[15px] px-[16px] shadow-sm"
                  dir={t('dir')}
                  style={{ textAlign: t('textaligh') as 'left' | 'right' | 'center' }} 
                  />
                {methods.formState.errors.phone && (
                  <div className="text-red-500 text-[12px]">
                    {t(`${methods.formState.errors.phone.message}`)}
                  </div>
                )}
              </div>

              {/* Complaint Reason */}
              <div className="flex flex-col gap-[8px] w-full lg:w-[411px]">
                <label className="text-[14px] font-medium text-[#667680]">
                  {t("fields.reason")}
                </label>
                <input
                  {...methods.register("reason")}
                  placeholder={t("placeholders.reason")}
                  className="outline-none text-black placeholder:text-[#BABFC2] w-full h-[56px] bg-[#f4f4f4] rounded-[15px] px-[16px] shadow-sm"
                />
                {methods.formState.errors.reason && (
                  <div className="text-red-500 text-[12px]">
                    {t(`${methods.formState.errors.reason.message}`)}
                  </div>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-[8px] self-stretch">
              <label className="text-[14px] font-medium text-[#667680]">
                {t("fields.message")}
              </label>
              <textarea
                {...methods.register("message")}
                placeholder={t("placeholders.message")}
                className="outline-none placeholder:text-[#BABFC2] text-black w-full h-[173px] bg-[#f4f4f4] rounded-[15px] py-[16px] px-[16px] shadow-sm"
              />
              {methods.formState.errors.message && (
                <div className="text-red-500 text-[12px]">
                  {t(`${methods.formState.errors.message.message}`)}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[16px] items-center self-stretch">
            <button
              type="submit"
              disabled={isPending}
              className="flex gap-[8px] items-start justify-center self-stretch bg-[#5D9D9F] text-[#fff] rounded-[15px] px-[50px] py-[14px]"
            >
              {isPending ? t("buttons.sending") : t("buttons.submit")}
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default ComplaintsForm;
