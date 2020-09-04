// TODO: move this logic to the backend
export const getCardCode = (card) => (card ? `${card.rank.shortName}${card.suit.name}` : '');
export const isWildcard = (cardCode) => ['JD', 'JC'].includes(cardCode);
export const isRemove = (cardCode) => ['JH', 'JS'].includes(cardCode);
