// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, clickThumbnail, isThumbnailClicked} = props
  const {
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = eachImageDetails

  const onClickThumbnailImage = () => {
    clickThumbnail(imageUrl, imageAltText)
  }

  const unClickedThumbnailCss = !isThumbnailClicked
    ? 'unClicked-thumbnail-style'
    : ''

  return (
    <li>
      <button className="button" type="button" onClick={onClickThumbnailImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${unClickedThumbnailCss}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
