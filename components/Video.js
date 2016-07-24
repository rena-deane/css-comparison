const Video = ({ id }) => (
  <div className="youtube">
      <iframe
          className="youtube-frame"
          src={`https://www.youtube.com/embed/${id}`}
          allowFullScreen
      />
  </div>
)

export default Video