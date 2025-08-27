import styles from './ReviewsItem.module.css'
import like from '../../../../img/like.svg'
import dislike from '../../../../img/dislike.svg'
import type { Review } from '@/shared/types'
import { validateTime } from '@/shared/helpers/helpers'

interface ReviewsItemProps {
    review: Review | undefined
}

const ReviewsItem: React.FC<ReviewsItemProps> = ({ review }) => {
    return (
        <>
            <li className={styles.item}>
                <img
                    src={review?.type === 'POSITIVE' ? like : dislike}
                    alt="like | dislike"
                    className={styles.item__img}
                />
                <div className={styles.item__row}>
                    <h3 className={styles.item__name}>{review?.author}</h3>
                    <p className={styles.item__date}>
                        {validateTime(review?.date)}
                    </p>
                </div>
                <p className={styles.item__description}>
                    {review?.description}
                </p>
            </li>
        </>
    )
}

export default ReviewsItem
