import { useCallback, useRef, useState } from 'react'

export function useDraggable(initial = { x: 24, y: 24 }) {
  const [pos, setPos] = useState(initial)
  const dragRef = useRef<{ dx: number; dy: number; dragging: boolean }>({ dx: 0, dy: 0, dragging: false })

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    dragRef.current.dragging = true
    dragRef.current.dx = e.clientX - pos.x
    dragRef.current.dy = e.clientY - pos.y
    const up = () => { dragRef.current.dragging = false; window.removeEventListener('mouseup', up); window.removeEventListener('mousemove', move) }
    const move = (ev: MouseEvent) => {
      if (!dragRef.current.dragging) return
      setPos({ x: ev.clientX - dragRef.current.dx, y: ev.clientY - dragRef.current.dy })
    }
    window.addEventListener('mouseup', up)
    window.addEventListener('mousemove', move)
  }, [pos])

  return { pos, setPos, onMouseDown }
}
