<template>
	<Button icon="checkmark-round" class="mar_r14">
	    <a v-link="{ name: 'hello' }">点击进入</a>
	</Button>
<router-view></router-view>
</template>
<script>
	import  Button  from '../../node_modules/iview/components/button';
	export default {
	    components: { Button }
	}
</script>

