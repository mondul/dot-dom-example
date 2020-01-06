'use strict'

import { H } from 'dot-dom'

import Counter from './Counter'

export default <div>
	<h1>Hello World!</h1>
	<Counter className="mb-2" />
	<Counter init={1} />
</div>
