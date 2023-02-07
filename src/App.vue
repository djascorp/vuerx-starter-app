<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { firestoreDatabase, firestoreCollection, projectId } from './database/initstore'
import db from './database/initrx'

export default defineComponent({
  components: {
    HelloWorld,
    TheWelcome
  },
  mounted() {
    try {
      const replicationState = db.users.syncFirestore({
        firestore: {
          projectId,
          database: firestoreDatabase,
          collection: firestoreCollection
        },
        pull: {},
        push: {},
        /**
         * Either do a live or a one-time replication
         * [default=true]
         */
        live: true,
        /**
         * (optional) likely you should just use the default.
         *
         * In firestore it is not possible to read out
         * the internally used write timestamp of a document.
         * Even if we could read it out, it is not indexed which
         * is required for fetch 'changes-since-x'.
         * So instead we have to rely on a custom user defined field
         * that contains the server time which is set by firestore via serverTimestamp()
         * IMPORTANT: The serverTimestampField MUST NOT be part of the collections RxJsonSchema!
         * [default='serverTimestamp']
         */
        serverTimestampField: 'serverTimestamp'
      });
      console.log(replicationState)
    } catch (error) {
      console.log('ERR REPLICATION', error)
    }

  }
})
</script>

<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <main>
      <TheWelcome />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
