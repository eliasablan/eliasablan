import React from 'react'
import { Stack, Inline, Button } from '@sanity/ui'
import { Link } from 'sanity/router'

interface Props {
  context: string
  renderDefault: (
    // eslint-disable-next-line no-unused-vars
    arg0: any
  ) =>
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | Promise<React.AwaitedReactNode>
    | null
    | undefined
}

const ToolMenu = (props: Props) => {
  if (props.context == 'topbar') {
    return (
      <Inline margin={0}>
        {props.renderDefault(props)}
        <Link
          href="/"
          target="_blank"
          style={{ textDecoration: 'none' }}
          replace
        >
          <Button
            fontSize={1}
            icon={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{
                  width: '16px',
                  height: '16px',
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            )}
            text="GO TO APP"
            style={{ cursor: 'pointer' }}
            padding={2}
            tone="critical"
            // mode="ghost"
            aria-label="Add content"
          />
        </Link>
      </Inline>
    )
  }

  if (props.context == 'sidebar') {
    return (
      <Stack margin={0}>
        {props.renderDefault(props)}
        <Link
          href="/"
          target="_blank"
          style={{ textDecoration: 'none', padding: '5px 0' }}
          replace
        >
          <Stack>
            <Button
              fontSize={1}
              icon={() => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{
                    width: '16px',
                    height: '16px',
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              )}
              text="GO TO APP"
              style={{ cursor: 'pointer' }}
              radius={2}
              padding={[4, 3]}
              tone="critical"
              aria-label="Add content"
            />
          </Stack>
        </Link>
      </Stack>
    )
  }
}

export default ToolMenu
