/**
 * TemplateSwitcher - Simple UI to switch visual templates.
 * Triggers proper dispose → init cycle via callback.
 */

import { useCallback } from 'react'
import type { TemplateId } from '@/engine/templates/TemplateRegistry'
import { TEMPLATE_IDS, TEMPLATE_LABELS } from '@/engine/templates/TemplateRegistry'

interface TemplateSwitcherProps {
  activeId: TemplateId
  onSwitch: (id: TemplateId) => void
}

export function TemplateSwitcher({ activeId, onSwitch }: TemplateSwitcherProps) {
  const handleClick = useCallback(
    (id: TemplateId) => () => {
      if (id !== activeId) onSwitch(id)
    },
    [activeId, onSwitch]
  )

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 8,
        zIndex: 10,
      }}
    >
      {TEMPLATE_IDS.map((id) => (
        <button
          key={id}
          onClick={handleClick(id)}
          style={{
            padding: '8px 16px',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 6,
            background: id === activeId ? 'rgba(0,170,255,0.3)' : 'rgba(0,0,0,0.5)',
            color: '#fff',
            cursor: 'pointer',
            fontFamily: 'system-ui',
            fontSize: 12,
          }}
        >
          {TEMPLATE_LABELS[id]}
        </button>
      ))}
    </div>
  )
}
