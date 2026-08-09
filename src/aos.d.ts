declare module 'aos' {
	interface AosOptions {
		delay?: number;
		duration?: number;
		easing?: string;
		once?: boolean;
		offset?: number;
	}
	function init(options?: AosOptions): void;
	function refresh(): void;
	export { init, refresh, AosOptions };
	const aos: { init: typeof init; refresh: typeof refresh };
	export default aos;
}
