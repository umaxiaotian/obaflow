<template>
    <div class="hint">
        <h4>obaflow Build:{{ $config.public.RELEASE_DATE }} With Nuxt3</h4><br>
        右クリックで新しいノードを追加できます。<br />
        ノード同士を線で接続したり、削除したりできます。
        <br />
        <br />
        このプロジェクト(Obaflow)はまだ開発段階です...
    </div>
</template>


<style>
.hint {
    position: absolute;
    top: 1rem;
    left: 7rem;
    z-index: 5;
    padding: 1rem;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>