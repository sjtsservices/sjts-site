import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { App, ConfigProvider } from "antd";
import MainLayout from "~/layout/MainLayout";
import NextNProgress from 'nextjs-progressbar';
import { SiteProvider } from "~/lib/providers/SiteProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <SiteProvider>
        <NextNProgress color="#4f46e5" />
        <App>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#4f46e5',
                colorText: '#1e1b4b'
              },
            }}
          >
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ConfigProvider>
        </App>
      </SiteProvider>

    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
