import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import vsDark from "prism-react-renderer/themes/vsDark"
import rangeParser from "parse-numeric-range"

const calculateLinesToHighlight = meta => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return index => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const highlightLineIsEnabled = meta => {
  const RE = /{([\d,-]+)}/
  return RE.test(meta)
}

const CodeBlock = ({ children, className, metastring }) => {
  // Pull the className
  const language = className.replace(/language-/, "") || ""
  const existsLineToHighLine = highlightLineIsEnabled(metastring)
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, index) => {
              if (tokens.length > index + 1) {
                const lineProps = getLineProps({ line, key: index })

                if (existsLineToHighLine) {
                  if (shouldHighlightLine(index)) {
                    lineProps.className = `${lineProps.className} highlighted-line`
                  } else {
                    lineProps.className = `${lineProps.className} not-highlighted-line`
                  }
                }

                return (
                  <div key={index} {...lineProps}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              }
            })}
          </pre>
        )
      }}
    </Highlight>
  )
}

export default CodeBlock
