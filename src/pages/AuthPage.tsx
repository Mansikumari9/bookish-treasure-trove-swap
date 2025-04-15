
import { AuthForm } from "@/components/auth/AuthForm";
import { Layout } from "@/components/layout/Layout";

const AuthPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="mx-auto max-w-md">
          <AuthForm />
        </div>
      </div>
    </Layout>
  );
};

export default AuthPage;
