import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="hover:bg-yellow duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
                 Learn more about why I am doing this project  {' '}
              <a
                href={`https://www.youtube.com/channel/UCWh7VTxiXz8HL-Ghf2caC0A/videos`}
                className="hover:bg-yellow duration-200 transition-colors"
              >
                And subscribe to my YouTube channel :)
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
