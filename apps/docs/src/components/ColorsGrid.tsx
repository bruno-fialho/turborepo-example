import { colors } from 'tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color1]) => {
    if (typeof(color1 === 'string')) {
      return (
        <div key={key} style={{ backgroundColor: color1 as string, padding: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(color1 as string, '#FFF') < 3.5 ? '#000' : '#FFF',
            }}
          >
            <strong>${key}</strong>
            <span>{color1}</span>
          </div>
        </div>
      )
    } else {
      Object.entries(color1).map(([key, color2]) => {
        if (typeof(color2 === 'string')) {
          return (
            <div key={key} style={{ backgroundColor: color2 as string, padding: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'monospace',
                  color: getContrast(color2 as string, '#FFF') < 3.5 ? '#000' : '#FFF',
                }}
              >
                <strong>${key}</strong>
                <span>{color2}</span>
              </div>
            </div>
          )
        } else {
          Object.entries(color2).map(([key, color3]) => {
            return (
              <div key={key} style={{ backgroundColor: color3 as string, padding: '2rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'monospace',
                    color: getContrast(color3 as string, '#FFF') < 3.5 ? '#000' : '#FFF',
                  }}
                >
                  <strong>${key}</strong>
                  <span>{color3}</span>
                </div>
              </div>
            )
          })
        }
      })
    }
  })
}
