import nextConfig from "../../../next.config.mjs";
import Link from 'next/link';
import styles from './Page.module.css';

export default function GameDetail({ data, similar }) {
    let gameSrc;
    if (data) {
        gameSrc = `${nextConfig.path_game}${data.game_id}`;
        console.log(gameSrc);
    }

    return (
        <>
            {data ? (
                <main className={`${styles.flex} ${styles.container} mx-auto mt-6 gap-x-6`}>
                    <div className={styles.container}>
                        <div className="game">
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
                                                </div>
                                                <div className="flex flex-col md:flex-row justify-end gap-4 max-sm:w-full max-sm:order-last">
                                                    <button
                                                        className="buttons_button__gDVZj buttonSecondary"
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
                                            </div>
                                            <article>
                                                <h3>DESCRIPTION</h3>
                                                <p className="mb-10">
                                                    {data.description}
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="similar">
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
                                                        <a className="ProductItem_productList__sA9IM">
                                                            <div className="product-img overflow-hidden">
                                                                <img
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
                                                        </a>
                                                    </Link>
                                                );
                                            })}
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
