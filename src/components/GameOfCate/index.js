// components/AllGame.js
import React from 'react';
import Link from 'next/link';
import styles from '../GameOfCate/styles.module.css'; 
import Image from 'next/image';
export default function AllGame({ data, pageActive, pageQuantity, onClickPage, onPreviousPage, onNextPage }) {
    const getVisiblePages = () => {
        const visiblePages = [];
        const startPage = Math.max(0, pageActive - 2);
        const endPage = Math.min(pageQuantity - 1, pageActive + 2);
    
        for (let i = startPage; i <= endPage; i++) {
          visiblePages.push(i);
        }
    
        return visiblePages;
      };
    
      const visiblePages = getVisiblePages();
    
  return (
    <>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.product_list}>
            <Link href={`/games/${item.slug}/${item.game_id}`} style={{ textDecoration: 'none' , color : "black" }}>
              <div className={styles.product_item}>
                <div className={styles.product_image}>
                  {item.assets.length > 0 && (
                    <Image src={`${item.img_path}${item.assets[0].name}`} alt="" width={100} height={100}/>
                  )}
                </div>
                <h3 className={styles.product_title}>{item.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="Pagination_pagination__7R_fc">
      <a className="pagination-button prev-button"
          onClick={onPreviousPage}
          >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <ul className="number-buttons">
      {visiblePages.map((index) => (
            <li
              key={index}
              onClick={() => onClickPage(index)}
              className={`${index === pageActive ? styles.active : ''} ${styles.paginationItem}`}
              style={{ backgroundColor: index === pageActive ? 'blue' : '#fff', 
              color: index === pageActive ? '#fff' : '#000'
              }}
            >
              <button>{index + 1}</button>
            </li>
          ))}
      </ul>
      <a className="pagination-button next-button "
        onClick={onNextPage}
        >

        <svg
          xmlns="http://www.w3.org/2000/svg"  
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
    </>
  );
}
