<template>
    <div class="hint">
        <b>Testヒント:</b><br />
        右クリックで新しいノードを追加できます。<br />
        ノード同士を線で接続したり、削除したりできます。
        <br/>
        <br/>
        このプロジェクト(Obaflow)はまだ開発段階です...
    </div>
</template>

<style>
.hint {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 5;
    padding: 1rem;
    background: #0003;
    color: white;
    pointer-events: none;
}
</style>