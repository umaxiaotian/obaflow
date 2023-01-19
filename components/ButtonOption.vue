<template>
    <button  type="button" class="btn btn-info" @click="count++">
        value.id = {{ value.hi }} <br> value.test = {{ value.test }} <br>カウントアップ {{ count }} 回.
    </button>


</template>

<script>
export default {
    props: ["option", "node", "value", "name"],
    data: () => {
        return {
            count: 0
        };
    }
};
</script>