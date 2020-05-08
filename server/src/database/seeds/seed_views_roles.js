
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('view_roles').del()
    .then(() => {
      // Inserts seed entries
      return knex('view_roles').insert([
        // Accounts
        { id: 1, field_id: 6, index: 1, comparator: 'equals', value: 'asset', view_id: 1 },
        { id: 2, field_id: 6, index: 1, comparator: 'equals', value: 'liability', view_id: 2 }, 
        { id: 3, field_id: 6, index: 1, comparator: 'equals', value: 'equity', view_id: 3 }, 
        { id: 4, field_id: 6, index: 1, comparator: 'equals', value: 'income', view_id: 4 }, 
        { id: 5, field_id: 6, index: 1, comparator: 'equals', value: 'expense', view_id: 5 }, 

        // Items
        { id: 6, field_id: 12, index: 1, comparator: 'equals', value: 'service', view_id: 6 },
        { id: 7, field_id: 12, index: 1, comparator: 'equals', value: 'inventory', view_id: 7 },
        { id: 8, field_id: 12, index: 1, comparator: 'equals', value: 'non-inventory', view_id: 8 },

        // Manual Journals
        { id: 9, field_id: 13, index: 1, comparator: 'equals', value: 'Journal', view_id: 9 },
        { id: 10, field_id: 13, index: 1, comparator: 'equals', value: 'CreditNote', view_id: 10 },
        { id: 11, field_id: 13, index: 1, comparator: 'equals', value: 'Reconciliation', view_id: 11 },
      ]);
    });
};
