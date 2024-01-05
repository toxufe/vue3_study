import { defineComponent } from "vue";


export default defineComponent({
    props: {
        modelValue: {
            type: Boolean,
        },
        name: {
            type: String,
        },
        nameModifiers:{
            isbt:{
                type:Boolean,
            }
        }
    },
    emits: ["update:modelValue", "update:name"],
    setup(props, { emit }) {
        const close = () => {
            emit("update:modelValue", false);
        };
        const input = (e:Event)=>{
            let target = e.target as HTMLInputElement;
            emit("update:name", props.nameModifiers.isbt?target.value+"-isbt":target.value);
        }
        return () => (
            <>
                <div>flag:{props.modelValue ? <b>true</b> : "false"} </div>

                <div>name:{props.name} {props.nameModifiers.isbt?"xxx":"yyy"}</div>

                <button onClick={() => close()}>关闭Flag</button>

                <hr />
                <div>
                    <input onInput={input} type="text" value={props.name} />
                </div>
            </>
        );
    },
});
