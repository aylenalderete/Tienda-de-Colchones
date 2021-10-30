import { useEffect,useState } from "react";

export const useEffectAsync = (effect, params=[]) => {
  useEffect(() => {
      (async () => {
        // eslint-disable-next-line
        await effect()
      })()
  // eslint-disable-next-line
  }, params);
};

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0)
	useEffect(() => {
		let last_known_scroll_position = 0
		let ticking = false
		const handleScroll = e => {
			last_known_scroll_position = window.scrollY
			if (!ticking) {
				window.requestAnimationFrame(function () {
					setScrollPosition(last_known_scroll_position)
					ticking = false
				})
				ticking = true
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})
	return scrollPosition
}
export default useScrollPosition;