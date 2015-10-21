export function reactUtilsFactory(t) {

  // is `React.createClass`?
  function isReactCreateClassMemberExpression(node) {
    return (
      t.isMemberExpression(node) &&
      t.isIdentifier(node.object, { name: 'React' }) &&
      t.isIdentifier(node.property, { name: 'createClass' })
    );
  }

  // is `class extends React.Component`?
  function isReactComponentClassDeclaration(node) {
    return (
      t.isClassDeclaration(node) &&
      t.isMemberExpression(node.superClass) &&
      t.isIdentifier(node.superClass.object, { name: 'React' }) &&
      t.isIdentifier(node.superClass.property, { name: 'Component' })
    );
  }

  // `class <name> extends React.Component`
  function getReactComponentClassName(node) {
    return node.id && node.id.name;
  }

  return {
    isReactCreateClassMemberExpression,
    isReactComponentClassDeclaration,
    getReactComponentClassName
  };
};
