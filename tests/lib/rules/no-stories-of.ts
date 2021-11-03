/**
 * @fileoverview storiesOf is deprecated and should not be used
 * @author Yann Braga
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import rule from '../../../lib/rules/no-stories-of'
import ruleTester from '../../utils/rule-tester'

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

ruleTester.run('no-stories-of', rule, {
  valid: [
    `
      import Button from '../components/Button';
      export default {
        title: 'Button',
        component: Button
      }

      export const Primary = () => <Button primary />
    `,
  ],

  invalid: [
    {
      code: `
        import { storiesOf } from '@storybook/react';
        import Button from '../components/Button';

        storiesOf('Button', module)
          .add('primary', () => <Button primary />)
      `,
      errors: [
        {
          messageId: 'doNotUseStoriesOf',
          type: 'ImportSpecifier',
        },
      ],
    },
  ],
})
