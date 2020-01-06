'use strict'

import { H } from 'dot-dom'

export default function(props, state, setState) {
	const { count = props.init || 0 } = state

	const increment = function() {
		setState({ count: 1 + count })
	}

	const decrement = function() {
		setState({ count: count - 1 })
	}

	return <div className={props.className || ''}>
		<span className="mr-1">Count: { '' + count }</span>
		<button type="button" className="btn btn-primary mr-1" onclick={increment}>+</button>
		<button type="button" className="btn btn-danger" onclick={decrement} disabled={count < 1}>-</button>
	</div>
}
