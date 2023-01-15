<template>
    <button  type="button" class="btn btn-info" @click="count++">
        You {{ value.hi }} {{ value.test }} clicked me {{ count }} times.
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