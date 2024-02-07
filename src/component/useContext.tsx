import AuthProvider from "./authProvider";
import ReturnHtml from "./returnHtml";

export default function CheckContext() {
  return (
    <AuthProvider>
      <ReturnHtml />
    </AuthProvider>
  );
};
