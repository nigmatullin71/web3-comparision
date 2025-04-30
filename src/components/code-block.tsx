"use client"

import { useEffect, useState } from "react"
import { Clipboard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="relative rounded-md overflow-hidden bg-gray-900 text-gray-100">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <span className="text-xs font-medium">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          <span className="ml-2 text-xs">{copied ? "Скопировано!" : "Копировать"}</span>
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}
