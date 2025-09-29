import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import { useAnimation } from '../hooks/useAnimation'

function DancingCat() {
  const { isAnimating, toggleAnimation } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="댄싱 고양이" className="cat-image" />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          className="dance-button"
          aria-label={isAnimating ? '춤 멈추기' : '춤 시작하기'}
          title="스페이스바나 엔터키로도 조작 가능합니다"
        >
          {isAnimating ? '춤 멈추기 🛑' : '춤 시작하기 💃'}
        </button>
      </div>

      <div className="keyboard-hint">
        💡 스페이스바나 엔터키를 눌러보세요!
      </div>

      <div className="dance-status">
        {isAnimating ? '🎵 고양이가 신나게 춤추고 있어요! 🎵' : '😸 버튼을 눌러서 춤을 춰보세요! 😸'}
      </div>
    </div>
  )
}

export default DancingCat