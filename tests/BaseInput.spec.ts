import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseInput from '~/components/BaseInput.vue'
import vuetify from '~/vuetify.config';


describe("BaseInput", () => {
  it("should mount a component", async () => {
    expect(BaseInput).toBeTruthy();
  });

  it("should render a component", async () => {
    const wrapper = mount(BaseInput, {
      global: {
        plugins: [vuetify]
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a component with a label", async () => {
    const wrapper = mount(BaseInput, {
      global: {
        plugins: [vuetify]
      },
  
      props: {
        label: "Username",
        
      }
    });

    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  }
  );

});