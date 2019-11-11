/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	add_render_callback,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
	let div1;
	let scrolling = false;
	let scrolling_timeout;
	let clear_scrolling = () => scrolling = false;
	let dispose;
	add_render_callback(ctx.div1_scroll_handler);

	return {
		c() {
			div1 = element("div");
			div1.innerHTML = `<div class="content"></div>`;
			attr(div1, "class", "viewport");
			dispose = listen(div1, "scroll", ctx.div1_scroll_handler);
		},
		m(target, anchor) {
			insert(target, div1, anchor);
		},
		p(changed, ctx) {
			if ((changed.x || changed.y) && !scrolling) {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				div1.scrollLeft = ctx.x;
				div1.scrollTop = ctx.y;
				scrolling_timeout = setTimeout(clear_scrolling, 100);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div1);
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let x;
	let y;

	function div1_scroll_handler() {
		x = this.scrollLeft;
		y = this.scrollTop;
		$$invalidate("x", x);
		$$invalidate("y", y);
	}

	return { x, y, div1_scroll_handler };
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;