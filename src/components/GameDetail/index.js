import nextConfig from "../../../next.config.mjs";
import Link from 'next/link';
import styles from './Page.module.css';
import Image from "next/image";

export default function GameDetail({ data, similar }) {
    let gameSrc;
    if (data) {
        gameSrc = `${nextConfig.path_game}${data.game_id}`;
        console.log(gameSrc);
    }

    return (
        <>
            {data ? (
                // <main className="flex container mx-auto mt-6 gap-x-6">
                //     <div className={styles.container}>
                //         <div className="game">
                //             <div className="games_gameDetail__tX9YO">
                //                 <div className="flex flex-col lg:flex-row gap-6">
                //                     <div className="lg:w-2/3 flex flex-col gap-6">
                //                         <iframe
                //                             allowFullScreen=""
                //                             width="100%"
                //                             height="660px"
                //                             src={gameSrc}
                //                         />
                //                         <div className="box">
                //                             <div className="flex flex-wrap justify-between items-center gap-5 mb-6">
                //                                 <div className="flex text-lg font-medium gap-3 items-center">
                //                                 </div>
                //                                 <div className="flex flex-col md:flex-row justify-end gap-4 max-sm:w-full max-sm:order-last">
                //                                     <button
                //                                         className="buttons_button__gDVZj buttonSecondary"
                //                                         type="submit"
                //                                     >
                //                                         Share
                //                                     </button>
                //                                     <Link
                //                                         className="buttons_button__gDVZj buttonSecondary text-center"
                //                                         target="_blank"
                //                                         href={gameSrc}
                //                                     >
                //                                         Open in a new tab
                //                                     </Link>
                //                                 </div>
                //                             </div>
                //                             <div className="info-line">
                //                                 <div className="row">
                //                                     <span className="flex flex-1">
                //                                         Game Title:
                //                                         <strong className="font-semibold pl-1">{data.title}</strong>
                //                                     </span>
                //                                 </div>
                //                             </div>
                //                             <article>
                //                                 <h3>DESCRIPTION</h3>
                //                                 <p className="mb-10">
                //                                     {data.description}
                //                                 </p>
                //                             </article>
                //                         </div>
                //                     </div>
                //                 </div>
                //                 <div className="similar">
                //                     <div className="lg:w-1/3">
                //                         <h2 className="page-title !text-1.5xl">Similar Games</h2>
                //                         <div className="grid grid-cols-2 gap-2 mb-5">
                //                             {similar && Array.isArray(similar) && similar.map((item) => {
                //                                 const game = data.similarGames[parseInt(item)];
                //                                 if (!game) return null;
                //                                 const href = `/games/${encodeURIComponent(game.slug)}/${encodeURIComponent(game.game_id)}`;
                //                                 return (
                //                                     <Link
                //                                         key={game.game_id}
                //                                         href={href}
                //                                         passHref
                //                                     >
                //                                         <div className="ProductItem_productList__sA9IM">
                //                                             <div className="product-img overflow-hidden">
                //                                                 <img
                //                                                     alt={game.title}
                //                                                     loading="lazy"
                //                                                     width={512}
                //                                                     height={384}
                //                                                     decoding="async"
                //                                                     data-nimg={1}
                //                                                     className="lg:!max-h-[134px] rounded-2xl"
                //                                                     src={`${nextConfig.img_path}${game.assets[0]?.name}`}
                //                                                     style={{ color: "transparent", maxHeight: 384 }}
                //                                                 />
                //                                             </div>
                //                                             <div className={styles.product_name}>
                //                                                 {game.title}
                //                                             </div>
                //                                         </div>
                //                                     </Link>
                //                                 );
                //                             })}
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </main>
                <main className="flex container mx-auto mt-6 gap-x-6">
  <div className="flex-1 w-full">
    <div className="games_gameDetail__tX9YO">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 flex flex-col gap-6">
          <iframe
            allowFullScreen=""
            width="100%"
            height="660px"
            src={gameSrc}
          />
          <div className="box">
            <div className="flex flex-wrap justify-between items-center gap-5 mb-6">
              <div className="flex text-lg font-medium gap-3 items-center">
                <span>33 Views</span>
              </div>
              <div className="flex flex-col md:flex-row justify-end gap-4 max-sm:w-full max-sm:order-last">
                <button
                  className="buttons_button__gDVZj buttonSecondary  "
                  type="submit"
                >
                  Share
                </button>
                <Link
                className="buttons_button__gDVZj buttonSecondary text-center"
                target="_blank"
                href={gameSrc}
            >
                Open in a new tab
            </Link>
              </div>
            </div>
            <div className="info-line">
              <div className="row">
                <span className="flex flex-1">
                  Game Title:
                  <strong className="font-semibold pl-1">{data.title}</strong>
                </span>
              </div>
              <div className="row">
                <span className="flex flex-1">Language</span>
                <div className="tags">
                  <span className="tag cursor-pointer">English</span>
                </div>
              </div>
            </div>
            <article>
              <h3>DESCRIPTION</h3>
                <p className="mb-10">
                  {data.description}
                </p>
              <h3>INSTRUCTIONS</h3>
            </article>
          </div>
        </div>
        <div className="lg:w-1/3">
          <h2 className="page-title !text-1.5xl">Similar Games</h2>
          <div className="grid grid-cols-2 gap-2 mb-5">
            {similar && Array.isArray(similar) && similar.map((item) => {
              const game = data.similarGames[parseInt(item)];
              if (!game) return null;
              const href = `/games/${encodeURIComponent(game.slug)}/${encodeURIComponent(game.game_id)}`;
              return (
                  <Link
                      key={game.game_id}
                      href={href}
                      passHref
                  >
                      <div className="ProductItem_productList__sA9IM">
                          <div className="product-img overflow-hidden">
                              <Image
                                  alt={game.title}
                                  loading="lazy"
                                  width={512}
                                  height={384}
                                  decoding="async"
                                  data-nimg={1}
                                  className="lg:!max-h-[134px] rounded-2xl"
                                  src={`${nextConfig.img_path}${game.assets[0]?.name}`}
                                  style={{ color: "transparent", maxHeight: 384 }}
                              />
                          </div>
                          <div className={styles.product_name}>
                              {game.title}
                          </div>
                      </div>
                  </Link>
              );
          })}
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="!mb-0">THUMBNAILS &amp; ICONS</h4>
              <button
                className="buttons_button__gDVZj buttonPrimary flex gap-1 "
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-5 stroke-2 stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                  />
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:-mx-7 mt-5">
        <div className="container mb-12">
          <div className="flex justify-between items-center mb-8 relative">
            <h2 className="page-title !pb-0">Collections</h2>
            <div className="swiper-controls pagination-bullet">
              <div className="swiper-button swiper-button-prev swiper-button-disabled" />
              <div
                id="pagination-contol"
                className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic"
                style={{ width: 50 }}
              >
                <span
                  className="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main"
                  style={{ left: 15 }}
                />
                <span
                  className="swiper-pagination-bullet swiper-pagination-bullet-active-next"
                  style={{ left: 15 }}
                />
                <span
                  className="swiper-pagination-bullet swiper-pagination-bullet-active-next-next"
                  style={{ left: 15 }}
                />
                <span
                  className="swiper-pagination-bullet"
                  style={{ left: 15 }}
                />
              </div>
              <div className="swiper-button swiper-button-next" />
            </div>
          </div>
          <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div
                className="swiper-slide style_gameColleciton__txU8U swiper-slide-active"
                style={{ width: "295.5px", marginRight: 30 }}
              >
                <Image
                  alt="Exclusive"
                  loading="lazy"
                  width={315}
                  height={220}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-[0.938rem] max-sm:w-full max-sm:!max-h-[unset]"
                  srcSet="https://img.gamedistribution.com/cf19c2cfc240400590a6415ff3256cf9-512x384.jpg 1x, https://img.gamedistribution.com/cf19c2cfc240400590a6415ff3256cf9-512x384.jpg 2x"
                  src="https://img.gamedistribution.com/cf19c2cfc240400590a6415ff3256cf9-512x384.jpg"
                  style={{ color: "transparent" }}
                />
                <div className="relative z-10">
                  <span className="collection-title">Exclusive</span>
                  <span className="collection-size">1,276 Games</span>
                  <button
                    className="buttons_button__gDVZj buttonPrimary  "
                    type="submit"
                  >
                    Show More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-3 stroke-white stroke-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="swiper-slide style_gameColleciton__txU8U swiper-slide-next"
                style={{ width: "295.5px", marginRight: 30 }}
              >
                <Image
                  alt="Ubisoft"
                  loading="lazy"
                  width={315}
                  height={220}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-[0.938rem] max-sm:w-full max-sm:!max-h-[unset]"
                  srcSet="https://img.gamedistribution.com/1a353bd608a84d7598621034b3e94f50-512x384.jpeg 1x, https://img.gamedistribution.com/1a353bd608a84d7598621034b3e94f50-512x384.jpeg 2x"
                  src="https://img.gamedistribution.com/1a353bd608a84d7598621034b3e94f50-512x384.jpeg"
                  style={{ color: "transparent" }}
                />
                <div className="relative z-10">
                  <span className="collection-title">Ubisoft</span>
                  <span className="collection-size">14 Games</span>
                  <button
                    className="buttons_button__gDVZj buttonPrimary  "
                    type="submit"
                  >
                    Show More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-3 stroke-white stroke-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="swiper-slide style_gameColleciton__txU8U"
                style={{ width: "295.5px", marginRight: 30 }}
              >
                <Image
                  alt="Brain Teasers"
                  loading="lazy"
                  width={315}
                  height={220}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-[0.938rem] max-sm:w-full max-sm:!max-h-[unset]"
                  srcSet="https://img.gamedistribution.com/847026468bf443cbaab5124ca49bf743-512x384.jpg 1x, https://img.gamedistribution.com/847026468bf443cbaab5124ca49bf743-512x384.jpg 2x"
                  src="https://img.gamedistribution.com/847026468bf443cbaab5124ca49bf743-512x384.jpg"
                  style={{ color: "transparent" }}
                />
                <div className="relative z-10">
                  <span className="collection-title">Brain Teasers</span>
                  <span className="collection-size">16 Games</span>
                  <button
                    className="buttons_button__gDVZj buttonPrimary  "
                    type="submit"
                  >
                    Show More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-3 stroke-white stroke-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="swiper-slide style_gameColleciton__txU8U"
                style={{ width: "295.5px", marginRight: 30 }}
              >
                <Image
                  alt="Hot"
                  loading="lazy"
                  width={315}
                  height={220}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-[0.938rem] max-sm:w-full max-sm:!max-h-[unset]"
                  srcSet="https://img.gamedistribution.com/c88e3da73e524d6eb8f33419883048ea-512x384.jpg 1x, https://img.gamedistribution.com/c88e3da73e524d6eb8f33419883048ea-512x384.jpg 2x"
                  src="https://img.gamedistribution.com/c88e3da73e524d6eb8f33419883048ea-512x384.jpg"
                  style={{ color: "transparent" }}
                />
                <div className="relative z-10">
                  <span className="collection-title">Hot</span>
                  <span className="collection-size">273 Games</span>
                  <button
                    className="buttons_button__gDVZj buttonPrimary  "
                    type="submit"
                  >
                    Show More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-3 stroke-white stroke-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="swiper-slide style_gameColleciton__txU8U"
                style={{ width: "295.5px", marginRight: 30 }}
              >
                <Image
                  alt="Top Picks"
                  loading="lazy"
                  width={315}
                  height={220}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-[0.938rem] max-sm:w-full max-sm:!max-h-[unset]"
                  srcSet="https://img.gamedistribution.com/0881a99e9bdc442eb04699bf4e6b67d3-512x384.jpg 1x, https://img.gamedistribution.com/0881a99e9bdc442eb04699bf4e6b67d3-512x384.jpg 2x"
                  src="https://img.gamedistribution.com/0881a99e9bdc442eb04699bf4e6b67d3-512x384.jpg"
                  style={{ color: "transparent" }}
                />
                <div className="relative z-10">
                  <span className="collection-title">Top Picks</span>
                  <span className="collection-size">270 Games</span>
                  <button
                    className="buttons_button__gDVZj buttonPrimary  "
                    type="submit"
                  >
                    Show More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-3 stroke-white stroke-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="swiper-slide style_gameColleciton__txU8U"
                style={{ width: "295.5px", marginRight: 30 }}
              >
                <Image
                  alt="In-Game Purchase"
                  loading="lazy"
                  width={315}
                  height={220}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-[0.938rem] max-sm:w-full max-sm:!max-h-[unset]"
                  srcSet="https://img.gamedistribution.com/02b35c68153c48049249c2027fc07030-512x384.jpeg 1x, https://img.gamedistribution.com/02b35c68153c48049249c2027fc07030-512x384.jpeg 2x"
                  src="https://img.gamedistribution.com/02b35c68153c48049249c2027fc07030-512x384.jpeg"
                  style={{ color: "transparent" }}
                />
                <div className="relative z-10">
                  <span className="collection-title">In-Game Purchase</span>
                  <span className="collection-size">13 Games</span>
                  <button
                    className="buttons_button__gDVZj buttonPrimary  "
                    type="submit"
                  >
                    Show More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-3 stroke-white stroke-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="swiper-slide style_gameColleciton__txU8U"
                style={{ width: "295.5px", marginRight: 30 }}
              >
                <Image
                  alt="New"
                  loading="lazy"
                  width={315}
                  height={220}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-[0.938rem] max-sm:w-full max-sm:!max-h-[unset]"
                  srcSet="https://img.gamedistribution.com/510c98d888cf401ba1ed6bf8e6d9ae4b-512x384.jpg 1x, https://img.gamedistribution.com/510c98d888cf401ba1ed6bf8e6d9ae4b-512x384.jpg 2x"
                  src="https://img.gamedistribution.com/510c98d888cf401ba1ed6bf8e6d9ae4b-512x384.jpg"
                  style={{
                    color: "transparent",
                    background:
                      'url("/assets/image-loader.svg") center center no-repeat'
                  }}
                />
                <div className="relative z-10">
                  <span className="collection-title">New</span>
                  <span className="collection-size">1,317 Games</span>
                  <button
                    className="buttons_button__gDVZj buttonPrimary  "
                    type="submit"
                  >
                    Show More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-3 stroke-white stroke-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

            ) : (<div>Waiting.....</div>)}
        </>
    );
}
