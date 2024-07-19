
import Layout from "@/layouts/Layout";
import Head from "next/head";

export const config = {
  unstable_runtimeJS: false
};


export default function Home() {
    return (
      <>
      <Head>
        <title>Home Pages</title>
        <meta name="description" content="Khám phá trang chính của chúng tôi để tìm các trò chơi mới nhất và hấp dẫn nhất. Chúng tôi cung cấp một bộ sưu tập đa dạng từ các trò chơi hành động kịch tính đến những cuộc phiêu lưu ly kỳ. Hãy cùng chúng tôi trải nghiệm những giây phút giải trí tuyệt vời nhất và khám phá thế giới game đầy màu sắc." />
      </Head>
      <Layout>
      Home Page
      </Layout> 
      </>
    );
  }
  