setInterval(() => {
    Array.from(document.querySelectorAll(
        '.update-components-actor--with-control-menu'
    ))
    .filter(s => s.closest('[data-id^="urn:li:activity"]') !== null)
    .map(s => s.closest('[data-id^="urn:li:activity"]').parentNode)
    .filter(d => d.style.display !== 'none')
    .map(d => { d.style.display = 'none'; console.log(`Removed ${d}.`) });
}, 500);
