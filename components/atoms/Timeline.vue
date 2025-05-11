<template>
    <div class="content-timeline">
        <p>2/3</p>
        <div class="content-progress">
            <div class="progress"></div>
        </div>
    </div>
</template>

<style>
.content-timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;

    p {
        font-size: 20px;
        font-weight: 600;
    }
    
    .content-progress {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: var(--color-black);
        padding: 4px;
        border-radius: 100px;
        width: 100%;
        height: 15px;
        
        .progress {
            height: 7px;
            width: 50%;
            border-radius: 100px;
            background: var(--color-blue);
        }
    }

}
</style>