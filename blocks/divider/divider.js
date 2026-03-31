const DEFAULT_ICON = '⚡';

export default function decorate(block) {
  // Read icon text from first cell if provided by author
  const firstCell = block.querySelector(':scope > div > div');
  const iconText = firstCell?.textContent?.trim() || DEFAULT_ICON;

  // Clear block content and rebuild
  block.innerHTML = '';

  const hr = document.createElement('hr');
  block.appendChild(hr);

  if (!block.classList.contains('no-icon')) {
    const iconSpan = document.createElement('span');
    iconSpan.className = 'divider-icon';
    iconSpan.setAttribute('aria-hidden', 'true');
    iconSpan.textContent = iconText;
    block.appendChild(iconSpan);
  }
}
