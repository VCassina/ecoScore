import { useMediaQuery } from 'react-responsive'

function useIsMobile() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  if (isMobile) {
    return 'mobile'
  } else {
    return 'desktop'
  }
}

export default useIsMobile