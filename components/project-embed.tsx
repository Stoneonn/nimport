'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { XIcon } from 'lucide-react'

type ProjectEmbedProps = {
  src: string
}

export function ProjectEmbed({ src }: ProjectEmbedProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <>
      <div className="relative aspect-video w-full cursor-zoom-in rounded-xl overflow-hidden">
        <iframe
          src={src}
          className="h-full w-full border-0"
          title="Project preview"
        />
        <div
          className="absolute inset-0 cursor-zoom-in"
          onClick={() => setIsZoomed(true)}
        />
      </div>

      <AnimatePresence>
        {isZoomed && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-white/40 backdrop-blur-sm dark:bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                className="relative rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                style={{ width: '90vw', height: '90vh' }}
              >
                <iframe
                  src={src}
                  className="h-full w-full rounded-xl border-0"
                  title="Project preview zoomed"
                />
              </motion.div>
              <motion.button
                onClick={() => setIsZoomed(false)}
                className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1 dark:bg-zinc-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.1 } }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
              >
                <XIcon className="h-5 w-5 text-zinc-500" />
              </motion.button>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
