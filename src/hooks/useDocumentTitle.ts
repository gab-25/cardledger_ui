import { useEffect } from "react";

/** <title> of the page, as base.html's "{% block title %} · CardLedger". */
export function useDocumentTitle(title: string | null | undefined) {
  useEffect(() => {
    if (title) document.title = `${title} · CardLedger`;
  }, [title]);
}
