import { resend } from "@/lib/resend";
import VerificationEmail  from "../../emails/VerificationsEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function SendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystry message | Verification code',
            react: VerificationEmail({
                username, otp: verifyCode
            }),
          });
        return{
            sucess: true,
            message: 'Verification send email sucessfully'
        }
    } catch (emailError) {
        console.error("Error sending verfication email", emailError);
        return{
            sucess:false,
            message: 'Failed to send verification email'
        }
        
    }
}