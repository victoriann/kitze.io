export const bindField = (instance, key) => ({
  onChange: e => instance.setState({[key]: e.target.value}),
  value: instance.state[key]
});
