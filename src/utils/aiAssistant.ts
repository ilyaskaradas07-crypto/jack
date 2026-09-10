export function openAiAssistant(prompt?: string): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('open-tripora-ai', {
        detail: { prompt },
      })
    );
  }
}
