<template>
  <div>
    <div class="d-flex justify-center">
      <looping-rhombuses-spinner
        :animation-duration="2500"
        :rhombus-size="10"
        :color="color"
        class="mx-auto"
      />
    </div>
  </div>
</template>
<script>
import { LoopingRhombusesSpinner } from 'epic-spinners';
export default {
  components: { LoopingRhombusesSpinner },
  props: ['color'],
};
</script>
