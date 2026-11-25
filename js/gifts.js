(function () {
  const accountRow = document.querySelector('[data-copy-value]')
    || document.querySelector('[data-account-row] [data-gift-value="account"]');
  const copyButton = document.querySelector('.copy-account');
  const feedback = document.querySelector('.copy-feedback');
  if (!accountRow || !copyButton || !feedback) return;

  const accountNumber = (accountRow.textContent.match(/\d[\d\s.-]*/g) || [])
    .sort((first, second) => second.replace(/\D/g, '').length - first.replace(/\D/g, '').length)[0]
    ?.replace(/\D/g, '') || '';
  if (!accountNumber) return;
  copyButton.hidden = false;

  async function copyText(value) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch (_) {
        // Continue with the local selection fallback when clipboard access is restricted.
      }
    }
    const field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.setAttribute('aria-hidden', 'true');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    const previousFocus = document.activeElement;
    document.body.append(field);
    field.select();
    let copied = false;
    try {
      copied = document.execCommand('copy');
    } catch (_) {
      copied = false;
    } finally {
      field.remove();
      previousFocus?.focus?.();
    }
    return copied;
  }

  copyButton.addEventListener('click', async () => {
    copyButton.disabled = true;
    let copied = false;
    try {
      copied = await copyText(accountNumber);
    } catch (_) {
      copied = false;
    }
    feedback.textContent = copied ? 'Número de cuenta copiado.' : 'No se pudo copiar; selecciona el número de cuenta.';
    copyButton.disabled = false;
    window.setTimeout(() => { feedback.textContent = ''; }, 3500);
  });
})();
