<template>
    <div class="logFund">
         <el-dialog 
            :title="dialog.title" 
            :visible.sync="dialog.show"
            :close-on-click-modal='false'
            :close-on-press-escape='false'
            :modal-append-to-body="false">
            <div class="form">
                <el-form 
                    ref="form" 
                    :model="form"
                    :rules="form_rules"
                    label-width="120px"
                    style="margin:10px;width:auto;">

                    <el-form-item prop='describe' label="Reason for expenditure:">
                        <el-input type="describe" v-model="form.remark"></el-input>
                    </el-form-item>

                    <el-form-item prop='expend' label="Spend:">
                        <el-input type="expend" v-model="form.expend"></el-input>
                    </el-form-item>

                    <el-form-item prop='cash' label="Balance:">
                        <el-input type="cash" v-model="form.cash"></el-input>
                    </el-form-item>

                    <el-form-item  class="text_right">
                        <el-button @click="dialog.show = false">Cancel</el-button>
                        <el-button type="primary" @click='onSubmit("form")'>Save</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "logfound",
  props: {
    dialog: Object,
    form: Object
  },
  data() {
    return {
      form_rules: {
        describe: [
          { required: true, message: "Please fill out something to keep every spending on track", trigger: "blur" }
        ],
        expend: [
          { required: true, message: "Expend can't be blank", trigger: "blur" }
        ],
        cash: [{ required: true, message: "Balance?！", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          const url =
            this.dialog.option == "add" ? "add" : `edit/${this.form.id}`;
          this.$axios.post(`/api/profile/${url}`, this.form).then(res => {
            this.$message({
              message: "Save Successful！",
              type: "success"
            });
            this.dialog.show = true;
            this.$emit("update");
          });
        }
      });
    }
  }
};
</script>

