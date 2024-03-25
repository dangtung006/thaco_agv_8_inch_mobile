export const classNames = (...names) =>
	(names || []).filter((e) => !!e && typeof e === 'string').join(' ')
