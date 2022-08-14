<template>
  <div>
    <container class="flex flex-col" variant="xs">
      <div
        class="
          text-black text-base
          leading-tight
          w-full
          font-bold
          mb-3
          max-w-xl
        "
      >
        {{ primary.heading }}
      </div>
      <table v-if="table && table.rows" class="text-xs w-full">
        <tbody>
          <tr
            v-if="table && table.header"
            class="border border-black bg-red text-white"
          >
            <th
              v-for="(header, i) in table.header"
              :key="header"
              class="text-left p-1 sm:p-2"
              :class="{
                'border-r border-black': i !== table.header.length - 1,
              }"
            >
              {{ header !== 'null' ? header : '' }}
            </th>
          </tr>
          <tr
            v-for="(row, i) in table.rows"
            :key="row"
            class="border border-black"
            :class="{
              'bg-white-600': i % 2 === 1 && primary.alternate_row_styles,
            }"
          >
            <td
              v-for="(col, ii) in row.filter(c => !String(c).includes('MERGE'))"
              :key="col"
              :rowspan="
                table.rows[i + 1] && table.rows[i + 1][ii].includes('MERGE')
                  ? 2
                  : 1
              "
              class="p-1 sm:p-2"
              :class="{ 'border-r border-black': ii !== row.length - 1 }"
            >
              {{ col !== 'null' ? col : '' }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex w-full mt-2">
        <AtomsRichText
          v-if="primary.caption !== null"
          class="italic text-xs mt-2 leading-tight rich-text max-w-xl"
          :richtext="primary.caption"
        />
      </div>
    </container>
  </div>
</template>

<script>
export default {
  props: {
    primary: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
  },
  /* to merge the default values, use the below code instead */
  /*
  props: {
    ...defaultProps,
    NEWPROPERTY: {
      type: TYPE
      default: DEFAULT
    }
  }
  */
  computed: {
    table() {
      const rows = this.primary.csv[0].text
        .split("\n")
        .map((row) => row.split(","));
      return {
        header: this.primary.has_header_row ? rows[0] : false,
        rows: this.primary.has_header_row ? rows.slice(1, rows.length) : rows,
      };
    },
  },
};
</script>
