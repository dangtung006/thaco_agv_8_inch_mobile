export const classnames = (...names) =>
	(names || []).filter((e) => !!e && typeof e === 'string').join(' ')
